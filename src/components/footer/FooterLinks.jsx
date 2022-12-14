import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import styles from '../../styles/footerLinks.module.css';

const groups = [
  {
    title: 'Quick Links',
    items: [
      {
        text: 'Contact Us',
        url: '',
      },
      {
        text: 'About Us',
        url: '',
      },
      {
        text: 'Testimonial',
        url: '',
      },
      {
        text: 'Gallery',
        url: '',
      },
      {
        text: 'Site Map',
        url: '',
      },
    ],
  },
  {
    title: 'Flats in Mumbai',
    items: [
      {
        text: '1BHK Andheri West',
        url: '',
      },
      {
        text: '2 BHK Andheri West',
        url: '',
      },
      {
        text: '3 BHK Andheri West',
        url: '',
      },
      {
        text: '1BHK Goregaon East',
        url: '',
      },
      {
        text: '2BHK Goregaon East',
        url: '',
      },
    ],
  },
  {
    title: 'Projects in Mumbai',
    items: [
      {
        text: 'Ongoing',
        url: '',
      },
      {
        text: 'Upcoming',
        url: '',
      },
      {
        text: 'Completed',
        url: '',
      },
      {
        text: 'Hetali Blessings',
        url: '',
      },
      {
        text: 'Hetali Anuchhaya',
        url: '',
      },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className={styles.linksGroup}>
      {groups.map((group, index) => {
        return (
          <Card className={styles.linksCard}>
            <Card.Header className={styles.linkGroupTitle}>
              {group.title}
            </Card.Header>
            <ListGroup variant='flush'>
              {group.items.map((item, indx) => {
                return (
                  <ListGroup.Item className={styles.linkItem}>
                    <a href=''>{item.text}</a>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
};

export default FooterLinks;
