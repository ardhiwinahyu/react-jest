import { render, screen } from "@testing-library/react";

import Header from "../Header";

test("Pengecekan text header", () => {
	render(<Header />);
	const stringEl = screen.getByText(/jest/i);
	expect(stringEl).toBeInTheDocument();
});

test("Pengecekan role header", () => {
	render(<Header />);
	const stringEl = screen.getByRole("heading");
	expect(stringEl).toBeInTheDocument();
});

test("Pengecekan banyaknya header", () => {
	render(<Header />);
	const stringEl = screen.getAllByRole("heading");
	expect(stringEl.length).toBe(1);
});
