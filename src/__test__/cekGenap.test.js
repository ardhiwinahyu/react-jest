import cekGenap from "../utils/cekGenap";

test("Test apakah genap", () => {
	expect(cekGenap(4)).toBe("Ini angka genap");
});

test("Test apakah ganjil", () => {
	expect(cekGenap(55)).toBe("Ini angka ganjil");
});

test("Test apakah angka", () => {
	expect(cekGenap("asdf")).toBe("Ini bukan angka");
});
