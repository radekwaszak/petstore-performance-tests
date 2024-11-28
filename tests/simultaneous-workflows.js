import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  scenarios: {
    browseCategories: {
      executor: 'constant-vus',
      exec: 'browse',
      vus: 10,
      duration: '1m',
    },
    searchProducts: {
      executor: 'constant-vus',
      exec: 'search',
      vus: 10,
      duration: '1m',
    },
  },
  tags: {
    project: "PetStoreWeb",
    testType: "PerformanceTest",
    testName: "SimultaneousWorkflows",
    environment: "Production",
  },
};

export function browse() {
  const res = http.get('https://petstore.octoperf.com/actions/Catalog.action');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}

export function search() {
  const res = http.get(
    'https://petstore.octoperf.com/actions/Catalog.action?search=goldfish'
  );
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
