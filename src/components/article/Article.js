import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div className="row my-3">
        <div className="col-md-12 text-center">
          <div className="card">
            <div className="card-header">
              <h4>Header</h4>
            </div>
            <div className="card-body bg-info">
              <h2>Article</h2>
            </div>
            <div className="card-footer">
              <h4>Footer</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
