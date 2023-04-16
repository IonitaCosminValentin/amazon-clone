import usaFlag from '../assets/usaFlag.png'
import { IoMdArrowDropdown } from 'react-icons/io'

const SelectLanguage = () => {
  return (
    <div
      className='select-language-container'
      onMouseEnter={(e: any) => {
        e.currentTarget.children[0].style = 'display:flex'
      }}
      onMouseLeave={(e: any) => {
        e.currentTarget.children[0].style = 'display:none'
      }}
    >
      <div className='language-opened'>
        <div className='top'>
          <span>Change Language</span> <a href='/'>Learn more</a>
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' defaultChecked />
          English - EN
        </div>
        <span className='divider'></span>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          español - ES
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          العربية - AR
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          Deutsch - DE
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          עברית - HE
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          한국어 - KO
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          português - PT
        </div>
        <div id='hover-highlight'>
          <input type='radio' name='languages' />
          中文 (简体) - ZH
        </div>
        <div>
          <input type='radio' name='languages' />
          中文 (繁體) - ZH
        </div>
        <span className='divider'></span>
        <div className='curency'>
          <div className='top-side'>
            Change currency
            <a href='/'>Learn more</a>
          </div>
          <div className='bottom-side'>
            $ - USD - US Dollar
            <a href='/'>Change</a>
          </div>
        </div>
        <span className='divider'></span>
        <div>
          <img src={usaFlag} alt='' id='usa-flag' />
          You are shopping on <br /> Amazon.com
        </div>
        <a href='/' id='change-country'>
          Change country/region.
        </a>
      </div>

      <div className='select-language on-hover' id='highlight'>
        <img src={usaFlag} alt='' id='usa-flag' />
        EN
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>
    </div>
  )
}

export default SelectLanguage
