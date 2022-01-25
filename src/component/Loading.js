import '../style/sass/pages/_loading.scss';

const Loading = function (props) {
  const { refObj } = props;
  return (
    <div ref={refObj} className="loading">
      <span />
    </div>
  );
};

export default Loading;
