import styled from "styled-components";
import { Link } from 'react-router-dom'

export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #1f1f1b;
        border-left: 4px solid #6d44dc;
    }
`;

export const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

export const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #6d44dc;
    }
`;