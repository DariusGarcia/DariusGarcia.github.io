import './navigation.scss';
import * as Scroll from 'react-scroll';
import { FiHome } from 'react-icons/fi';

let scroller = Scroll.scroller;
let animateScroll = Scroll.animateScroll;

function Navigation() {
	return (
		<nav className='header-container'>
			<div className='nav-home-icons-container'>
				<ul className='nav-home-list'>
					<li
						className='home-icon'
						onClick={() =>
							animateScroll.scrollToTop({
								duration: 20,
								delay: 0,
							})
						}>
						<FiHome />
					</li>
					<li className='nav-darius-h1'>
						{' '}
						<h1>darius.</h1>
					</li>
				</ul>
			</div>
			<div className='nav-links-container'>
				<ul className='nav-list'>
					<li
						onClick={() =>
							scroller.scrollTo('about', {
								duration: 20,
								delay: 0,
								smooth: true,
								offset: -100,
							})
						}>
						About
					</li>
					<li
						onClick={() =>
							scroller.scrollTo('tech', {
								duration: 20,
								delay: 0,
								smooth: true,
								offset: -150,
							})
						}>
						Skills
					</li>
					<li
						onClick={() =>
							scroller.scrollTo('projects', {
								duration: 20,
								delay: 0,
								smooth: true,
								offset: -115,
							})
						}>
						Projects
					</li>
					<li
						onClick={() =>
							scroller.scrollTo('contact', {
								duration: 20,
								delay: 0,
								smooth: true,
								offset: -50,
							})
						}>
						Contact
					</li>
					<li
						className='resume'
						onClick={() =>
							scroller.scrollTo('myScrollToElement', {
								duration: 20,
								delay: 0,
								smooth: true,
								offset: -100,
							})
						}>
						{ResumeLink}
					</li>
				</ul>
			</div>
		</nav>
	);
}

const ResumeLink = (
	<a href='/files/Resume.pdf' target='_blank'>
		{' '}
		Resume
	</a>
);

export default Navigation;
