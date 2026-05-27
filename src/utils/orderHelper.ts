export function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

export function checkPassword(newPassword: string, databasePassword: string) {
  return newPassword === databasePassword;
}
