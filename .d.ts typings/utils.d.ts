declare namespace common {
    function hash(password: string): Promise<string>;
    function addCurrency(amount: number): string;
    function returnNotTyped(value: string): string;
  }
  export = common