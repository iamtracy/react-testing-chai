import { renderComponent, expect } from '../test-helper';
import CommentBox from '../../src/components/comment-box';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has class comment-box', () => {
        expect(component).to.have.class('comment-box');
    });

    it('has a textarea', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });

});