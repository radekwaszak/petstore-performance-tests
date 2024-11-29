# Performance Testing Report

## **Project Overview**
This project aimed to assess the performance, functionality, and reliability of the [**Pet Store Web Application**](https://petstore.octoperf.com/actions/Catalog.action) under various scenarios. Tests were executed using **k6 Cloud**, focusing on user-critical workflows to ensure the system meets both functional and performance requirements.

## **Test Environment**
- **Device**: Desktop
- **Operating System**: Windows 10
- **Browser**: Google Chrome (Version 131.0.6778.86) (64-bit)
- **Performance Testing Tool**: k6 Cloud

---

## **Overall Test Results**

Detailed results for each run can be found in the [GrafanaCloud Tests Reports](https://github.com/radekwaszak/petstore-performance-tests/tree/main/GrafanaCloud%20Tests%20Reports) folder.

VUs = Virtual Users

### **1. Browsing Product Categories**
- **Objective**: Ensure users can browse categories efficiently.
- **Conditions**: VUs: 10, Duration: 1 min 30 sec.
- **Performance Overview**: The test had an overall average request rate of 9.3 reqs/s, peaking at an average of 10 reqs/s while running 10 VUs. The maximum response time occurred at 10 VUs, with a response time of 113 ms. The average response time at the same point in time was 112 ms, with 95% of requests taking less than 113 ms. The total number of requests was 540 with no failed requests observed.
- **Status**: Passed

### **2. Adding Items to Cart**
- **Objective**: Verify users can add items to their shopping cart without errors.
- **Conditions**: VUs: 50, Duration: 2 min 30 sec.
- **Performance Overview**: The test had an overall average request rate of 332 reqs/s, peaking at an average of 448 reqs/s while running 50 VUs.The maximum response time occurred at 36 VUs, with a response time of 143 ms. The average response time at the same point in time was 112 ms, with 95% of requests taking less than 114 ms. The total number of requests was 40 228 with no failed requests observed.
- **Status**: Passed

### **3. Search Functionality**
- **Objective**: Test the search feature to ensure accurate and responsive results.
- **Conditions**: VUs: 50, Duration: 2 min 30 sec.
- **Performance Overview**: The test had an overall average request rate of 334 reqs/s, peaking at an average of 451 reqs/s while running 50 VUs. The maximum response time occurred at 22 VUs, with a response time of 125 ms. The average response time at the same point in time was 111 ms, with 95% of requests taking less than 113 ms. The total number of requests was 40 446 with no failed requests observed.
- **Status**: Passed

### **4. Simultaneous Workflows**
- **Objective**: Validate the system's ability to handle multiple workflows concurrently.
- **Conditions**: VUs: 20, Duration: 1 min 30 sec.
- **Performance Overview**: The test had an overall average request rate of 18 reqs/s, peaking at an average of 20 reqs/s while running 20 VUs. The maximum response time occurred at 20 VUs, with a response time of 127 ms. The average response time at the same point in time was 113 ms, with 95% of requests taking less than 113 ms. The total number of requests was 1 080 with no failed requests observed.
- **Status**: Passed

### **5. Load Test**
- **Objective**: Assess the system's performance under heavy load (50, 100, and 1,000 users).
- **Conditions**: VUs: 100, Duration: 10 min 30 sec.
- **Performance Overview**: The test had an overall average request rate of 54 reqs/s, peaking at an average of 90 reqs/s while running 99 VUs. The maximum response time occurred at 76 VUs, with a response time of 136 ms. The average response time at the same point in time was 112 ms, with 95% of requests taking less than 113 ms. The total number of requests was 32 339 with no failed requests observed.
- **Status**: Passed

---

## **Summary of Results**
All tests passed successfully, confirming that the [**Pet Store Web Application**](https://petstore.octoperf.com/actions/Catalog.action) meets the following criteria:
1. All critical workflows operate without errors.
2. Response times for all scenarios are well within the acceptable limit of 3 seconds.
3. The system effectively handles high concurrency and load conditions.
4. No HTTP failures were observed in any test.

---

## **Conclusion**
The performance testing results indicate that the [**Pet Store Web Application**](https://petstore.octoperf.com/actions/Catalog.action) is robust, reliable, and capable of handling high traffic. All requirements have been successfully met, and the system is ready for deployment in production.
