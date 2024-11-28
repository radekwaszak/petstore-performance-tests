import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 50 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 50 },
    { duration: '1m', target: 0 }
  ],
  tags: {
    project: "PetStoreWeb",
    testType: "PerformanceTest",
    testName: "GeneralLoadTest",
    environment: "Production",
  },
};

export default function () {
  const res = http.get('https://petstore.octoperf.com/actions/Catalog.action');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}