const curreny = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const formatValue = (value: number): string => curreny.format(value);

export default formatValue;
