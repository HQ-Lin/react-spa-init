import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

// 拦截请求结果返回data字段
instance.interceptors.response.use((response) => {
    return response.data;
}, (xhr) => {
    const data = xhr.response.data;
    return Promise.reject(data);
});

export function createIo(instance) {
    return {
        get(url, params = {}) {
            return instance.get(url, { params });
        },
        post(url, data = {}, config = {}) {
            return instance.post(url, data, config);
        },
        put(url, data = {}, config = {}) {
            return instance.put(url, data, config);
        },
        delete(url, data = {}) {
            return instance.delete(url, { data });
        },
    };
}

export default createIo(instance);
