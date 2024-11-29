# **Test Plan for Pet Store Web Performance Testing**

## **1. Introduction**
The objective of this test plan is to validate the performance of the [**Pet Store Web Application**](https://petstore.octoperf.com/actions/Catalog.action) by simulating multiple user interactions under load. The tests will include various workflows such as browsing product categories, adding items to the cart, searching for products, and completing a checkout. The primary goal is to ensure that the website performs well under different levels of user load and that critical workflows function correctly.

## **2. Test Environment**

### **Test Setup**
- **Operating System**: Windows 10
- **Browser**: Google Chrome (Version 131.0.6778.86) (64-bit)
- **Testing Tool**: k6 Cloud (for performance testing)
- **Test Execution Platform**: Local Machine with k6 configured and linked to k6 Cloud for result tracking.

## **3. Test Scenarios**

The following test scenarios will be executed to ensure the website meets functional and performance requirements:

### **3.1 Browsing Product Categories**
- **Objective**: Verify that users can browse through product categories.
- **Test Steps**:
  1. Open the Pet Store homepage.
  2. Navigate to the product categories section.
  3. Select various categories (e.g., fish, dogs, birds).
  4. Verify that the category pages load successfully.
- **Expected Results**:
  - Categories should load within 3 seconds.
  - Products related to each category should be displayed.

### **3.2 Adding Items to Cart**
- **Objective**: Verify that users can add products to their shopping cart.
- **Test Steps**:
  1. Browse through product categories.
  2. Select a product and add it to the cart.
  3. Check that the cart reflects the added item.
- **Expected Results**:
  - The cart should update immediately with the added item.
  - The cart should show the correct quantity and product details.

### **3.3 Search Functionality**
- **Objective**: Verify that users can search for products effectively.
- **Test Steps**:
  1. Go to the search bar.
  2. Enter a product keyword (e.g., "goldfish").
  3. Review the search results.
- **Expected Results**:
  - Search results should be relevant and display within 3 seconds.
  - The correct products should be listed for the entered keyword.

### **3.4 Simultaneous Workflows**
- **Objective**: Verify that the website can handle multiple users performing different actions simultaneously.
- **Test Steps**:
  1. Run users concurrently performing different actions (e.g., browsing categories, searching products).
  2. Monitor the website’s behavior and response times.
- **Expected Results**:
  - The website should handle simultaneous actions without crashes or delays.
  - Response times for all actions should remain within acceptable limits.

### **3.5 Load Testing**
- **Objective**: Verify that the website can handle increasing user load.
- **Test Steps**:
  1. Simulate varying levels of load (0, 50, 100 users).
  2. Monitor response times, error rates, and system performance during each load level.
- **Expected Results**:
  - The website should continue to function correctly even under high load.
  - Response times should remain below 3 seconds.
  - Error rates should remain low (less than 1%).

## **4. Test Strategy**

### **Test Execution**
- **Tools**: 
  - **k6 Cloud** will be used to run performance and load tests. 
  - **k6** will be run locally to simulate virtual users (VUs) performing the above actions.

### **Performance Criteria**
- **Load Time**: The website should load in under 3 seconds for all actions (browse categories, add to cart, checkout, search).
- **Error Rate**: Less than 1% errors during all tests.
- **Scalability**: The website should perform well under the test scenarios, including 50 and 100 users.

## **5. Success Criteria**
- The tests will be deemed successful if the following conditions are met:
  - All actions (browsing, adding to cart, searching, and checkout) should complete successfully without errors.
  - The website should meet the performance criteria (response time, error rate) under load.
  - The system should handle simultaneous workflows with no degradation in performance.

## **6. Risk Assessment**
- **High Traffic**: The website may experience performance degradation under heavy traffic if not optimized.
- **Network Variability**: Although normal internet conditions are assumed, network variability might affect performance, and tests should be rerun if anomalies occur.

## **7. Conclusion**
This test plan outlines the steps to validate the performance and functionality of the Pet Store Web Application under different conditions. By executing these tests, we aim to ensure that the website performs well and provides a smooth user experience even during high traffic loads.
