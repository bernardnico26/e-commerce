import Button from 'react-bootstrap/Button';
function ArticleCard({ data }) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={data.images?.[0].url}
        style={{ height: 200, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <button type="button" class="btn btn-dark">Go somewhere</button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;