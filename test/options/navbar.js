QUnit.test('options#navbar', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(1);

  return new Viewer(image, {
    inline: true,

    built: function () {
      assert.notOk(util.hasClass(this.viewer.navbar, 'viewer-hide'));

      done();
    }
  });
});

QUnit.test('options#navbar: false', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(1);

  return new Viewer(image, {
    inline: true,
    navbar: false,

    built: function () {
      assert.ok(util.hasClass(this.viewer.navbar, 'viewer-hide'));

      done();
    }
  });
});
