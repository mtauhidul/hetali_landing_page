import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Clock from '../../assets/others/clock.svg';
import Donation from '../../assets/others/donation.svg';
import Friendship from '../../assets/others/friendship.svg';
import Star from '../../assets/others/star.svg';
import styles from '../../styles/aboutCards.module.css';

const allCards = [
  {
    icon: Clock,
    text: 'Our track record has been impeccable with project completion on time and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our modern and urbane designs.',
  },
  {
    icon: Star,
    text: 'The Hetali Group is a redeveloper like no other with a profound focus on quality and long term satisfaction of its residents.',
  },
  {
    icon: Friendship,
    text: "They just don't endeavour but build homes which make it's residents proud of their address by putting home-owners at the heart and soul of everything they do from start to finish and post completion.",
  },
  {
    icon: Donation,
    text: 'Hetali Group lives by the ethos of building homes to live and not houses to stay in.',
  },
];

function AboutCards() {
  return (
    <div className={styles.aboutCardsContainer}>
      <Row
        style={{ maxWidth: '100%', margin: '0' }}
        xs={1}
        md={2}
        className='g-4'>
        {allCards.map((card, idx) => (
          <Col>
            <Card className={styles.aboutCard}>
              <Card.Img className={styles.icon} variant='top' src={card.icon} />
              <Card.Text className={styles.cardText}>{card.text}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AboutCards;
