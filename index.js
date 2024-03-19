var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Update the customerName variable directly
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error because you cannot reassign a value to a constant.
}
