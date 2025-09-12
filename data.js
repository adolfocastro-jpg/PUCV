// data.js
export const DRIVE_URL = "https://drive.google.com/uc?export=download&id=1Y7ujNmFP_TnOYcgestgZOclV8VPpsKal";

export async function fetchData() {
  try {
    const response = await fetch(DRIVE_URL);
    if (!response.ok) throw new Error("Error al cargar los datos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("No se pudo obtener el JSON:", error);
    return [];
  }
}
