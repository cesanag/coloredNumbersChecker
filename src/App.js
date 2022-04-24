import "./styles.css";

export default function App() {
  const array = [...Array(100).keys()];

  const isEven = (n) => {
    return n % 2 === 0;
  };

  const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
      if (n % i === 0) return false;
    return n > 1;
  };

  const arrayed = array.map((arr) => (
    <div
      ke
      className={`number 
      ${isEven(arr) ? "even" : "odd"}
      ${isPrime(arr) && "prime"}`}
    >
      {arr}
    </div>
  ));

  return (
    <div className="App">
      <div className="container">{arrayed}</div>
    </div>
  );
}
