/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #161624;
  align-items: center;
  padding-left: 5vw;
`

export const UlContainer = styled.ul`
  max-height: 30vh;
  width: 70vw;
  align-items: left;
  overflow-y: scroll;
  border: 1px solid #f8fafc;
`

export const Heading = styled.h1`
  color: #f1f5f9;
  font-size: 20px;
  margin: 0;
  align-self: flex-start;
  padding: 0;
`

export const UlCon = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 50vh;
  width: 95vw;
  overflow-y: auto;
`

export const JustCon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  color: #fff;
`
