import { BiChevronUp } from 'react-icons/bi'

const AboutMusic = () => {

    // for open the queue page (component)
    const queueOpen = () => {
        document.getElementById("queueBox").style.display = "block";
    }

    return (
        <button onClick={queueOpen} className='text-gray-400'>
            <BiChevronUp size={28} />
        </button>
    )
}

export default AboutMusic
