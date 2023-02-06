export default function cekGenap(angka) {
	if (typeof angka !== "number") {
		return "Ini bukan angka";
	}

	if (angka % 2 === 0) {
		return "Ini angka genap";
	} else {
		return "Ini angka ganjil";
	}
}
