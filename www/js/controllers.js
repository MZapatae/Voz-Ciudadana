angular.module('starter.controllers', [])

.controller('FormController', function($scope, $ionicPopup, $timeout) {

  // Triggered on a button click, or some other target
  $scope.showPopup = function() {

    var alertPopup = $ionicPopup.alert({
      title: 'Por favor...',
      template: 'Debe incluir su nombre en la peticion'
    });
    alertPopup.then(function(res) {
      console.log('Thank you for not eating my delicious ice cream cone');
    });
  };

  $scope.sendMail= function(username) {
    $scope.content = "Estimados miembros de la comisión de Constitución, el motivo de este mail es para pedirle que apoye el proyecto de acuerdo para poner límite a la dieta parlamentaria, no olvide que somos nosotros, el pueblo, los que deberíamos decidir en democracia que es lo que queremos para nuestros país. Saluda atte, " + username;

    if (angular.isUndefined(username) || username === null) {
      $scope.showPopup();
    } else {
      if(window.plugins && window.plugins.emailComposer) {
        window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
          console.log("Response -> " + result);
        }, 
        "Peticion para apoyar Ley de Dieta", // Subject
        $scope.content,           // Body
        ['oandrade@congreso.cl','gceroni@congreso.cl','fchain@congreso.cl','juanantoniocoloma@congreso.cl','cmonckeberg@congreso.cl','asquella@congreso.cl','renzo.trisotti@congreso.cl'],    // To
        null,                         // CC
        null,                         // BCC
        false,                        // isHTML
        null,                         // Attachments
        null);                        // Attachment Data
        }
      }
    }
  }
);


