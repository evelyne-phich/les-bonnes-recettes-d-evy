import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

function uniq(number) {
  let listWithoutDuplicates = [];
  for (let i = 0; i < number.length; i++) {
    if (listWithoutDuplicates.includes(number[i])) {
    } else {
      listWithoutDuplicates.push(number[i]);
    }
  }
  return listWithoutDuplicates;
}

test("should removes all duplicates in an array", () => {
  expect(uniq(["francais", "anglais", "anglais"])).toStrictEqual([
    "francais",
    "anglais",
  ]);
  expect(uniq([1, 2, 3, 3, 2, 1])).toStrictEqual([1, 2, 3]);
  expect(uniq(["france", "chinois", "anglais"])).toStrictEqual([
    "france",
    "chinois",
    "anglais",
  ]);
  expect(
    uniq(["france", "chinois", "anglais", "anglais", "anglais", "chinois"])
  ).toStrictEqual(["france", "chinois", "anglais"]);
});
