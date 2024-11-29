# Performance Testing Project for Pet Store Web

## **Overview**
This repository contains the performance testing project for the [**Pet Store Web Application**](https://petstore.octoperf.com/actions/Catalog.action) . The tests were conducted using **k6 Cloud** to evaluate the system's functionality, performance, and reliability under various scenarios.

---

## **Test Scenarios**
1. **Browsing Product Categories**: Ensure smooth navigation through product categories.
2. **Adding Items to Cart**: Verify users can add products to their cart without errors.
3. **Search Functionality**: Test the search feature for responsiveness and accuracy.
4. **Simultaneous Workflows**: Validate the system's ability to handle multiple user workflows.
5. **Load Test**: Assess performance under heavy user load.

---

## **Test Results**
All tests passed successfully. For detailed results, refer to the [Final Report](./final-report.md).

---

## **Project Setup**
### **Prerequisites**
- Install [Node.js](https://nodejs.org/) (for running k6 locally, if required).
- k6 Cloud account for uploading test results.

### **Running Tests**
1. Clone this repository:
  
   ```
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Run the test scripts locally:

```
k6 run <test-script-name.js>
```

3. Upload results to k6 Cloud:

```
k6 cloud <test-script-name.js>
```

## **License**
This project is licensed under the MIT License. See LICENSE for details.
