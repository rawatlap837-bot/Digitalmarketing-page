import C from '../content'
import ContentBlock from '../components/ContentBlock'

export default function ContentSections() {
  return <>{C.blocks.map((block, index) => <ContentBlock key={block.id} block={block} alternate={index % 2 === 0} />)}</>
}
