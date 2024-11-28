import { check } from 'k6';
import http from 'k6/http';
import { Trend } from 'k6/metrics';

let addToCartTrend = new Trend('add_to_cart_response_time');

export let options = {
    stages: [
        { duration: '30s', target: 50 }, 
        { duration: '1m', target: 50 }, 
        { duration: '30s', target: 0 },
    ],
    thresholds: {
        'add_to_cart_response_time': ['p(95)<3000'],
    },
};

export default function () {

    let homePage = http.get('https://petstore.octoperf.com/actions/Catalog.action');
    check(homePage, {
        'Homepage loaded successfully': (r) => r.status === 200,
    });

    let fishCategoryPage = http.get('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    check(fishCategoryPage, {
        'Fish Category loaded successfully': (r) => r.status === 200,
    });

    let productPage = http.get('https://petstore.octoperf.com/actions/Catalog.action?viewProduct=&productId=FI-SW-01');
    check(productPage, {
        'Product page loaded successfully': (r) => r.status === 200,
    });

    let addToCartPage = http.get('https://petstore.octoperf.com/actions/Cart.action?addItemToCart=&workingItemId=EST-1');
    check(addToCartPage, {
        'Add to cart successful': (r) => r.status === 200,
    });

    addToCartTrend.add(addToCartPage.timings.duration);
  }