import './widgets/WCUser';

export function App() {
  return (
    <>
      <h1 className="helloWorld">Hello world!</h1>
      <section style={{ height: '512px' }}>
        <chess-widget username="magnuscarlsen" />
        {/* <chess-widget username="fedoryakubovich" /> */}
      </section>
    </>
  );
}
