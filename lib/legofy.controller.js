import {transform} from 'legofy';

class LegofyController {

    constructor($element, $scope, $window) {
        'ngInject';

        let vm = this;

        vm.options = {
            factor : vm.factor,
            blendMode : vm.blendMode
        };

        transform($element[0], vm.options);

        $window.addEventListener('resize', () => {
            transform($element[0], vm.options);
        });


    }
}

export default LegofyController;
