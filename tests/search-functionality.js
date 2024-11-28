import { check } from 'k6';
import http from 'k6/http';
import { Trend } from 'k6/metrics';

let searchTrend = new Trend('search_response_time');

export let options = {
    stages: [
        { duration: '30s', target: 50 },
        { duration: '1m', target: 50 },
        { duration: '30s', target: 0 },
    ],
    thresholds: {
        'search_response_time': ['p(95)<3000'],
    },
};

export default function () {
  
    let homePage = http.get('https://petstore.octoperf.com/actions/Catalog.action');
    check(homePage, {
        'Homepage loaded successfully': (r) => r.status === 200,
    });

    
    let payload = 'keyword=Goldfish'; 
    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    let searchResponse = http.post('https://petstore.octoperf.com/actions/Catalog.action', payload, { headers: headers });
    check(searchResponse, {
        'Search request successful': (r) => r.status === 200,
        'Search results include Goldfish': (r) => r.body.includes('Goldfish'),
    });

    searchTrend.add(searchResponse.timings.duration);
}