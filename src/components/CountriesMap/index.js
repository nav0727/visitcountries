import {MapContainer, Para, RemoveBtn, MapImg, RowCon} from './styleComponents'

const CountriesMap = props => {
  const {map, remove} = props
  const {id, name, imageUrl} = map
  const removeCountry = () => {
    remove(id)
  }
  return (
    <MapContainer id={id}>
      <MapImg src={imageUrl} alt="thumbnail" />
      <RowCon>
        <Para>{name}</Para>
        <RemoveBtn type="button" onClick={removeCountry}>
          Remove
        </RemoveBtn>
      </RowCon>
    </MapContainer>
  )
}

export default CountriesMap
