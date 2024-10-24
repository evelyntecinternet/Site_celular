import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function CardImage({id, images}) {
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <figure>
                <Image src={images} fluid />
                {/* <img src="/images/images-1.jpg"  /> */}
            </figure>
        </Col>
    )
}