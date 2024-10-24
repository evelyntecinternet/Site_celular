import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src="/images/banner_celular1.jpg" fluid className={StyleSheet.image} />
        <Carousel.Caption className={StyleSheet.caption}>
          <h3>Os mais novos celulares chegaram!</h3>
          <p>Os mais novos celulares acabaram de chegar no mercado,fique de olho e já garanta o seu! </p>
        </Carousel.Caption  >
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/banner_celular2.jpg" fluid className={StyleSheet.image} />
        <Carousel.Caption className={StyleSheet.caption}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src ="/images/banner_celular3.jpg" fluid className={StyleSheet.image} />
        <Carousel.Caption className={StyleSheet.caption}>
          <h3>Iphone 12 acabou de chegar na área!</h3>
          <p>
          O Apple iPhone 12 Pro Max é um dos smartphones iOS mais avançados e completos que existem em circulação. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;