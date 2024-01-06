/* eslint-disable react/prop-types */


function SearchResult({ data }) {
  return (
    <article className="search-result">
      <div className="image-container">
        <img alt="" src={data.image_url} />
      </div>
      <div className="description">
        <p className="name">{data.title}</p>
        <p className="author">
          By <b>{data.author.name}</b>
        </p>
        <p className="abstract">{data.synopsis}</p>
      </div>
    </article>
  );
}

export default SearchResult;
