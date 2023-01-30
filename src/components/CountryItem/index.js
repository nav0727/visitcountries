import {VisitBtn, ListContainer, ListPara} from './styleComponents'

const CountryItem = props => {
  const {countryItem, onVisit} = props
  const {id, name, isVisited} = countryItem
  const changeVisit = () => {
    onVisit(id)
  }

  return (
    <ListContainer id={id}>
      <p>{name}</p>

      {isVisited ? (
        <ListPara>Visited</ListPara>
      ) : (
        <VisitBtn type="button" onClick={changeVisit}>
          Visit
        </VisitBtn>
      )}
    </ListContainer>
  )
}

export default CountryItem
