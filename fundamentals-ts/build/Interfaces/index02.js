"use strict";
function showDiscount(price) {
    console.log(`Discount of the course ${price}`);
}
const newCourse = {
    id: '123123',
    name: 'Course 1',
    price: 43.90,
    discount: showDiscount
};
console.log(newCourse.discount(350));
