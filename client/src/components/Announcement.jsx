import React from "react";
import styled from "styled-components";

const Announcement = () => {
    const Container = styled.div`
        height: 30px;
        background-color: teal;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
    `;

    return (
        <Container>
            <div>Super Deal! Free shipping on orders over €30</div>
        </Container>
    );
};

export default Announcement;
