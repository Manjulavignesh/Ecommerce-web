import { Card } from "react-bootstrap";
const Product3 = () => {
  return (
    <Card>
      <div className="row">
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          style={{ height: 600, width: 500 }}
        />
        <div>
          <ol><h3 style={{color:"green"}}>Reviews</h3></ol>
          <li style={{margin:50}}>Reviews represent evaluations of a company, product, or service, that customers write.</li>
          <li style={{margin:50}}>Amazing Product,Worth to buy it</li>
          <li style={{margin:50}}>Quality need to  Improve....!!! </li>
          <li style={{margin:50}}>Peer review sites are probably what you think of when you think of customer reviews.</li>
          <li style={{margin:50}}>However, this also means you’re not as in control of these kinds of reviews...</li>
          
        
        </div>
      </div>
    </Card>
  );
};
export default Product3;
