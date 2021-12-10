export const Save = props => {
  const { text } = props.attributes

  return (
    <div>
      <span style="font-size:1em" className={'value'}>
        {text}
      </span>
      <span style="font-size:.75em">{text}</span>
      <span style="font-size:.5em">{text}</span>
      <span style="font-size:.25em">{text}</span>
      {'...'}
    </div>
  )
}

export default Save
