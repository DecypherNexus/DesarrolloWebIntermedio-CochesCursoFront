export interface CarDTO {

  /**
   * Código del Coche
   */
  carCode?: number;

  /**
   * Id de la Marca del Coche
   */
  carBrandId: number;

  /**
   * Descripción de la Marca del Coche
   */
  carBrandDescription?: string;

  /**
   * Referencia del Coche
   */
  reference: string;

  /**
   * Precio del Coche
   */
  price: number;

  /**
   * Año del Modelo del Coche
   */
  modelYear: number;

  /**
   * Color del Coche
   */
  color: string;

  /**
   * Número de Caballos de Fuerza del Coche
   */
  horsepower: number;

  /**
   * Cantidad de Puertas del Coche
   */
  doorNumber: number;

  /**
   * Cilindraje del Coche
   */
  engineDisplacement: number;

  /**
   * Transmisión del Coche
   */
  transmission: string;

  /**
   * Tipo de Combustible del Coche
   */
  fuelType: string;

  /**
   * Cantidad de Asientos del Coche
   */
  seatNumber: number;

  /**
   * Tracción del Coche
   */
  traction: number;

  /**
   * Dirección del Coche
   */
  steering: string;

  /**
   * Categoría del Coche
   */
  category: string;

  /**
   * Ruta de la Imagen del Coche
   */
  imagePath: string;

  /**
   * Almacén del Coche
   */
  stock: number;

}
