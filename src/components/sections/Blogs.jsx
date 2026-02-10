import React from "react";
import styled from "styled-components";
import { blogs } from "../../data/constants";
import BlogCard from "../cards/BlogCard";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 50px;
	padding: 0px 16px;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	gap: 12px;
`;

const Title = styled.div`
	font-size: 52px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${({ theme }) => theme.text_primary};
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	font-weight: 600;
	color: ${({ theme }) => theme.text_secondary};
	margin-bottom: 40px;
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 28px;
	flex-wrap: wrap;
	width: 100%;
`;

const Blogs = () => {
	return (
		<Container id="Blogs">
			<Wrapper>
				<Title>Blogs</Title>
				<Desc>Short write-ups where I share learnings, tips, and walkthroughs from my projects and experiments.</Desc>

				<CardContainer>
					{blogs.map((b) => (
						<BlogCard key={b.id || b.title} blog={b} />
					))}
				</CardContainer>
			</Wrapper>
		</Container>
	);
};

export default Blogs;
