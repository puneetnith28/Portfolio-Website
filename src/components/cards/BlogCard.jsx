import React, { useState } from "react";
import styled from "styled-components";
import { FaTag, FaRegCalendarAlt } from "react-icons/fa";

const Card = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(213, 208, 208, 0.5);
  overflow: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.03);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
`;

const OverlayButtons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
`;

const OverlayButton = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + "CC"};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
`;

const Excerpt = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary + 99};
  line-height: 1.4;
  min-height: 72px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

// const ReadButton = styled.a`
//   -webkit-appearance: button;
//   -moz-appearance: button;
//   appearance: button;
//   text-decoration: none;
//   padding: 10px 14px;
//   background: ${({ theme }) => theme.primary};
//   color: white;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 14px;
// `;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  cursor: pointer;
  margin-top: 6px;
  align-self: flex-start;
  padding: 0;
`;

const BlogCard = ({ blog }) => {
  const [showMore, setShowMore] = useState(false);
  const toggle = () => setShowMore(!showMore);

  const displayed = showMore ? blog.description : blog.description.slice(0, 140) + (blog.description.length > 140 ? "..." : "");

  return (
    <Card>
      <ImageWrapper>
        <Image src={blog.image} alt={blog.title} />
        <OverlayButtons>
          <OverlayButton href={blog.link} target="_blank" rel="noopener noreferrer">
            Read Post
          </OverlayButton>
        </OverlayButtons>
      </ImageWrapper>

      <Content>
        <Title>{blog.title}</Title>
        <Excerpt>{displayed}</Excerpt>
        <ToggleButton onClick={toggle}>
          {showMore ? "See less" : "See more"}
        </ToggleButton>

        <Meta>
          <Tags>
            <Tag>
              <FaRegCalendarAlt size={12} />
              <span style={{ fontSize: 12 }}>{blog.date}</span>
            </Tag>
            {blog.tags.slice(0, 2).map((t) => (
              <Tag key={t}>
                <FaTag size={12} />
                <span style={{ fontSize: 12 }}>{t}</span>
              </Tag>
            ))}
          </Tags>
        </Meta>
      </Content>
    </Card>
  );
};

export default BlogCard;
