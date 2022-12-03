const Container = ({ children, styling }) => {
  return (
    <div className={`max-w-screen-xl mx-auto lg:px-24 sm:px-14 px-7 ${styling}`}>{children}</div>
  );
};

export default Container;
