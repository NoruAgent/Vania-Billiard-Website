// WhatsApp URL builders + business constants
// PRD Section 9 — Two WhatsApp numbers

export const WA = {
  meja: "6282241545326",      // +62 822-4154-5326
  aksesoris: "6285182306565", // +62 851-8230-6565
  displayMeja: "0822-4154-5326",
  displayAksesoris: "0851-8230-6565",
} as const;

const MESSAGES = {
  tableGeneral:
    "Halo Vania Billiard, saya tertarik dengan [Nama Produk]. Saya ingin konsultasi harga, ukuran, spesifikasi, dan rekomendasi yang cocok.",
  accessoriesGeneral:
    "Halo Vania Billiard, saya ingin tanya stok dan harga untuk [Nama Aksesoris].",
  simulator:
    "Halo Vania Billiard, saya sudah mencoba simulator ruangan.\n\nUkuran ruangan saya:\nPanjang: [x] meter\nLebar: [y] meter\nMeja yang saya coba: [7ft/8ft/9ft]\n\nMohon rekomendasi ukuran meja yang paling cocok.",
  consultation:
    "Halo Vania Billiard, saya ingin konsultasi meja billiard untuk ruangan saya.",
} as const;

export function buildWaUrl(
  number: string,
  message: string,
  productName?: string
): string {
  let finalMessage = message;
  if (productName) {
    finalMessage = message.replace("[Nama Produk]", productName).replace("[Nama Aksesoris]", productName);
  } else {
    finalMessage = message
      .replace(/\[Nama Produk\]/g, "meja billiard")
      .replace(/\[Nama Aksesoris\]/g, "aksesoris billiard");
  }
  const encoded = encodeURIComponent(finalMessage);
  return `https://wa.me/${number}?text=${encoded}`;
}

// Convenience helpers
export const waTableLink = (productName?: string) =>
  buildWaUrl(WA.meja, MESSAGES.tableGeneral, productName);

export const waAccessoriesLink = (accessoryName?: string) =>
  buildWaUrl(WA.aksesoris, MESSAGES.accessoriesGeneral, accessoryName);

export const waSimulatorLink = (params: { length: number; width: number; size: string }) =>
  buildWaUrl(
    WA.meja,
    MESSAGES.simulator
      .replace("[x]", String(params.length))
      .replace("[y]", String(params.width))
      .replace("[7ft/8ft/9ft]", params.size)
  );

export const waConsultationLink = () =>
  buildWaUrl(WA.meja, MESSAGES.consultation);
