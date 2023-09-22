interface CourseProps {
  id: string;
  name: string;
  price: number;  

  discount: (price: number) => void;
}

function showDiscount(price: number): void {
  console.log(`Discount of the course ${price}`)
}

const newCourse: CourseProps = {
  id: '123123',
  name: 'Course 1',
  price: 43.90,
  discount: showDiscount
}

console.log(newCourse.discount(350))