import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '1m',
  tags: {
    project: "PetStoreWeb",
    testType: "PerformanceTest",
    testName: "BrowseProductCategories",
    environment: "Production",
  },
};

export default function () {
  const res = http.get('https://petstore.octoperf.com/actions/Catalog.action');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response contains category links': (r) =>
      r.body.includes('Fish') && r.body.includes('Dogs'),
  });

  sleep(1);
}
