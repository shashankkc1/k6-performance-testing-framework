import http from 'k6/http';
import { check, group, fail } from 'k6';

export const options = {
    vus: 1,
    iterations: 1
};

// Create a random string of given length
function randomString(length, charset = '') {
    if (!charset) charset = 'abcdefghijklmnopqrstuvwxyz';
    let res = '';
    while (length--) res += charset[(Math.random() * charset.length) | 0];
    return res;
}

const USERNAME = `${randomString(10)}@example.com`; // Set your own email or `${randomString(10)}@example.com`;
const PASSWORD = 'superCroc2019';

const BASE_URL = 'https://test-api.k6.io';

// Register a new user and retrieve authentication token for subsequent API requests
//export function setup() {
    export default function () {
    const res = http.post(`${BASE_URL}/user/register/`, {
        first_name: 'Crocodile',
        last_name: 'Owner',
        username: USERNAME,
        password: PASSWORD,
    });

    check(res, { 'created user': (r) => r.status === 201 });
    check(res, { 'created user1': (r) => r.status === 201 });
    check(res, { 'injected fail check 1': (r) => r.status === 200 });
    check(res, { 'injected fail check 2': (r) => r.status === 200 });

    const res1 = http.post(`${BASE_URL}/user/register/`, {
        first_name: 'Crocodile',
        last_name: 'Owner',
        
    });

    check(res1, { 'created user': (r) => r.status === 201 });
    check(res1, { 'created user1': (r) => r.status === 201 });
    check(res1, { 'injected fail check 1': (r) => r.status === 200 });
    check(res1, { 'injected fail check 2': (r) => r.status === 200 });

}