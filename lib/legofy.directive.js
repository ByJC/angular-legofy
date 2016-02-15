import LegofyController from './legofy.controller';

class LegofyDirective {

    static factory () {

        return new LegofyDirective();

    }

    constructor () {

        this.restrict = 'A';
        this.controller = LegofyController;
        this.controllerAs = 'legofyCtrl';
        this.bindToController = {
            factor: '=',
            blendMode: '='
        };
    }
}

export default LegofyDirective.factory;
